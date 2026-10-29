<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

class Order extends Model
{

    use HasFactory;

    protected $fillable = [
        'external_order_id',
        'user_id',
        'is_guest',
        'email',
        'name',
        'phone_number',
        'status',
        'total',
        'payment_status',
        'note',
    ];

    /**
     * Get monthly sales data for the last N months.
     *
     * @param int $months The number of months to retrieve data for.
     * @return array An associative array with 'labels' (month names) and 'data' (sales totals).
     */
    public static function getMonthlySales(int $months = 6): array
    {
        $labels = [];
        $data = [];

        // Get the start date (N months ago)
        // We subtract $months - 1 to include the current month in the range of N months.
        $startDate = Carbon::now()->subMonths($months - 1)->startOfMonth();

        // Generate labels for the last N months
        for ($i = 0; $i < $months; $i++) {
            $date = Carbon::now()->subMonths($months - 1 - $i);
            $labels[] = $date->format('F'); // e.g., 'January'
        }

        // Fetch sales data from the database
        $monthlySales = self::select(
            DB::raw('DATE_FORMAT(created_at, "%Y-%m") as month_year'),
            DB::raw('SUM(total) as total_sales')
        )
            ->where('created_at', '>=', $startDate)
            ->groupBy('month_year')
            ->orderBy('month_year')
            ->get()
            ->keyBy('month_year'); // Key by 'YYYY-MM' for easy lookup

        // Populate data array, ensuring all months are present even if no sales
        foreach ($labels as $index => $monthName) {
            $currentMonth = Carbon::now()->subMonths($months - 1 - $index);
            $monthYearKey = $currentMonth->format('Y-m');
            $data[] = $monthlySales->has($monthYearKey) ? (float)$monthlySales[$monthYearKey]->total_sales : 0;
        }

        return ['labels' => $labels, 'data' => $data];
    }

    public function orderItem(): Order|HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}

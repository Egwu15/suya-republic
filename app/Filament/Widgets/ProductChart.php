<?php

namespace App\Filament\Widgets;

use App\Models\OrderItem;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class ProductChart extends ChartWidget
{
    protected static ?string $heading = 'Top 3 Products';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        $topProducts = OrderItem::query()
            ->select('products.name', DB::raw('SUM(order_items.quantity) as total_quantity'))
            ->join('products', 'order_items.product_id', '=', 'products.id')
            ->groupBy('products.name')
            ->orderByDesc('total_quantity')
            ->limit(3)
            ->get();

        return [
            'datasets' => [
                [
                    'label' => 'Quantity Sold',
                    'data' => $topProducts->pluck('total_quantity')->toArray(),
                    'backgroundColor' => [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    'borderColor' => [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    'borderWidth' => 1,
                ],
            ],
            'labels' => $topProducts->pluck('name')->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'pie';
    }
}

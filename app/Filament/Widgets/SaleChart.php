<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use Filament\Widgets\ChartWidget;

class SaleChart extends ChartWidget
{
    protected static ?string $heading = 'Sales Overview';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        $salesData = Order::getMonthlySales();

        return [
            'datasets' => [
                [
                    'label' => 'Sales',
                    'data' => $salesData['data'],
                    'borderColor' => 'rgba(75, 192, 192, 1)',
                    'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                ],
            ],
            'labels' => $salesData['labels'],
  
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}

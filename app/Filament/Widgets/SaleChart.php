<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class SaleChart extends ChartWidget
{
    protected static ?string $heading = 'Sales Overview';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Sales',
                    'data' => [65, 59, 80, 81, 56, 55, 40],
                    'borderColor' => 'rgba(75, 192, 192, 1)',
                    'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                ],
            ],
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}

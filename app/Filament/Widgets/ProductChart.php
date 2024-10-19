<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class ProductChart extends ChartWidget
{
    protected static ?string $heading = 'Top 4 Products';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        // Fetch top 4 products based on sales or any other criteria
        // $topProducts = Product::orderBy('sales', 'desc')->take(4)->get();

        $topProducts = collect([
            ['name' => 'Organic Almonds', 'sales' => 150],
            ['name' => 'Gluten-Free Bread', 'sales' => 120],
            ['name' => 'Vegan Protein Bars', 'sales' => 100],
            ['name' => 'Herbal Green Tea', 'sales' => 80],

        ]);


        return [
            'datasets' => [
                [
                    'label' => 'Sales',
                    'data' => $topProducts->pluck('sales')->toArray(),
                    'backgroundColor' => [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    'borderColor' => [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    'borderWidth' => 1,
                ],
            ],
            'labels' => $topProducts->pluck('name')->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}

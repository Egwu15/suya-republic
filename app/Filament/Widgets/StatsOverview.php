<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;


class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Sales', '€' . number_format(Order::sum('total'), 2))
                ->Icon('heroicon-m-arrow-trending-up')
                ->color('success'),
            Stat::make('User count', User::count())
                ->Icon('heroicon-m-user-group')
                ->color('success'),
            Stat::make('Product count', Product::count())
                ->Icon('heroicon-m-cube')
                ->color('info'),
        ];
    }
}

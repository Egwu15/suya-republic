<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use \App\Models\User;
use \App\Models\Product;


class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Sales', '192.1k')
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

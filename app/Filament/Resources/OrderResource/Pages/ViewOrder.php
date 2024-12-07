<?php

namespace App\Filament\Resources\OrderResource\Pages;

use App\Filament\Resources\OrderResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Infolist;

class ViewOrder extends ViewRecord
{
    protected static string $resource = OrderResource::class;

    public function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([

                TextEntry::make('name'),
                TextEntry::make('email'),
                IconEntry::make('is_guest')
                    ->boolean(),

                TextEntry::make('payment_status')
                    ->badge()
                    ->color(
                        fn(string $state): string => match ($state) {
                            'Pending' => 'warning',
                            'Payment pending' => 'warning',
                            'Failed' => 'danger',
                            'Successful' => 'success',
                            'rejected' => 'danger',
                            default => 'gray'
                        },
                    ),
                TextEntry::make('status'),
                TextEntry::make('total'),
                TextEntry::make('note'),



            ]);
    }
}

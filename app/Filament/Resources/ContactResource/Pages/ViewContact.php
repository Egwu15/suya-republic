<?php

namespace App\Filament\Resources\ContactResource\Pages;

use App\Filament\Resources\ContactResource;
use Filament\Actions;
use Filament\Tables\Table;
use Filament\Resources\Pages\ViewRecord;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;


class ViewContact extends ViewRecord
{
    protected static string $resource = ContactResource::class;


    public function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([

                TextEntry::make('full_name'),
                TextEntry::make('email'),
                TextEntry::make('subject'),
                TextEntry::make('created_at')->since(),
                TextEntry::make('message'),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([])
            ->actions([

                // ...
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [];
    }

   
}

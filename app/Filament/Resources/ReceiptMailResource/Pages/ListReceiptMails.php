<?php

namespace App\Filament\Resources\ReceiptMailResource\Pages;

use App\Filament\Resources\ReceiptMailResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListReceiptMails extends ListRecords
{
    protected static string $resource = ReceiptMailResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

<?php

namespace App\Filament\Resources\VarianceOptionsResource\Pages;

use App\Filament\Resources\VarianceOptionsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditVarianceOptions extends EditRecord
{
    protected static string $resource = VarianceOptionsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

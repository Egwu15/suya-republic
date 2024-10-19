<?php

namespace App\Filament\Resources\VarianceResource\Pages;

use App\Filament\Resources\VarianceResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditVariance extends EditRecord
{
    protected static string $resource = VarianceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

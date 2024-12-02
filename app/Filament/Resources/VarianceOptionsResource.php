<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VarianceOptionsResource\Pages;
use App\Filament\Resources\VarianceOptionsResource\RelationManagers;
use App\Models\VarianceOptions;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Select;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class VarianceOptionsResource extends Resource
{
    protected static ?string $model = VarianceOptions::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('variance_id')
                    ->relationship('variance', 'name'),
                Forms\Components\TextInput::make('name')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('variance.name')->label("Variance")
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('name')->label("Option Name")
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListVarianceOptions::route('/'),
            'create' => Pages\CreateVarianceOptions::route('/create'),
            'edit' => Pages\EditVarianceOptions::route('/{record}/edit'),
        ];
    }
}

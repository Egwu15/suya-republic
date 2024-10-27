<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PurchaseResource\Pages;
use App\Models\Purchase;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Actions;
use App\Filament\Imports\UserImporter;

class PurchaseResource extends Resource
{
    protected static ?string $model = Purchase::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([]);
    }



    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('id')->label('ID'),
                Tables\Columns\TextColumn::make('email')->label('Email')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('purchase_count')->label('Purchase Count')
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_spent')->label('Total Spent')
                    ->sortable(),
                Tables\Columns\TextColumn::make('last_purchase')->label('Last purchase')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')->label('first_purchase')
                    ->sortable(),

            ])
            ->filters([
                //
            ])
            ->actions([

                // Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                
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
            'index' => Pages\ListPurchases::route('/'),
            // 'create' => Pages\CreatePurchase::route('/create'),
            // 'view' => Pages\ViewPurchase::route('/{record}'),
            // 'edit' => Pages\EditPurchase::route('/{record}/edit'),
        ];
    }

    public static function readOnly(): bool
    {
        return true;
    }
}

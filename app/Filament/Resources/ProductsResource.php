<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductsResource\Pages;
use App\Filament\Resources\ProductsResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Forms\Components\Textarea;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\SelectColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Forms\Components\Toggle;

class ProductsResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Product Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->label('Product Name'),
                Textarea::make('description')
                    ->required()
                    ->label('Product Description'),
                TextInput::make('price')->required()
                    ->numeric()
                    ->label('Product Price'),
                Select::make('category_id')
                    ::make('status')
                    ->options([
                        'in_stock' => 'In Stock',
                        'sold_out' => 'Sold Out',
                        'back_order' => 'Back Order',
                    ])
                    ->default('in_stock'),
                FileUpload::make('product_image')
                    ->label('Image')
                    ->image()
                    ->required()
                    ->directory('product_image'),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                Select::make('variance_id')
                    ->relationship('variance', 'name'),
                Toggle::make('is_international')->label('International')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Name')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('description')
                    ->label('Description')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('price')
                    ->label('Price')
                    ->sortable()
                    ->searchable()
                    ->money('eur'),
                SelectColumn::make('status')
                    ->label('Status')
                    ->options([
                        'in_stock' => 'In Stock',
                        'sold_out' => 'Sold Out',
                        'back_order' => 'Back Order',
                    ])
                    ->sortable()
                    ->searchable(),
                TextColumn::make('category.name')
                    ->label('Category')
                    ->sortable()
                    ->searchable(),
                ImageColumn::make('product_image')
                    ->label('Image'),
                TextColumn::make('variance.name')
                    ->label('Variance')
                    ->sortable()
                    ->searchable(),
                IconColumn::make('is_international')->label('International')
                    ->boolean(),
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProducts::route('/create'),
            'edit' => Pages\EditProducts::route('/{record}/edit'),
        ];
    }
}

<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Order Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }

        .flex {
            display: flex;
            align-items: center;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
        }

        .email-header {
            background-color: #d2401e;
            color: white;
            text-align: center;
            padding: 20px;
            display: flex;
        }

        .email-header h1 {
            margin: 0;
            font-size: 24px;
        }

        .email-body {
            padding: 20px;
        }

        .order-details {
            margin-bottom: 20px;
        }

        .order-details h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .order-details p {
            margin: 5px 0;
            font-size: 14px;
        }

        .product-list {
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            overflow: hidden;
            margin-top: 10px;
        }

        .product-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #e0e0e0;
        }

        .product-item:last-child {
            border-bottom: none;
        }

        .product-item img {
            max-width: 50px;
            max-height: 50px;
            margin-right: 10px;
            border-radius: 4px;
        }

        .product-info {
            flex: 1;
            margin-left: 10px;
        }

        .product-info p {
            margin: 2px 0;
            font-size: 14px;
        }

        .total {
            text-align: right;
            font-size: 18px;
            font-weight: bold;
            margin-top: 20px;
        }

        .email-footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <!-- Header -->
        <div class="email-header flex">
            <div style="background: white;  border-radius: 50%; width: 50px; height: 50px; margin-right: 10px ">
                <img src="{{ asset('assets/img/suya/Logo-Side-bar.png') }}" alt="Logo" className="home-logo w-size"
                    style="width: 50px" />
            </div>

            <h1>Order Confirmation</h1>
        </div>

        <!-- Body -->
        <div class="email-body">
            <!-- Order Details -->
            <div class="order-details">
                <h2>Order Details</h2>
                <p><strong>Order Number:</strong> {{ $data['orderNo'] }}</p>
                <p><strong>Order Date:</strong> {{ $data['date'] }}</p>
                <p><strong>Name:</strong> {{ $data['name'] }}</p>
                <p><strong>Email:</strong> {{ $data['email'] }}</p>
                {{-- <p><strong>Address:</strong> 123 Main Street, London, UK</p> --}}
            </div>

            <!-- Product List -->
            <h2>Products Ordered</h2>
            <div class="product-list">

                @foreach ($data['products'] as $product)
                    <div class="product-item">
                        <img src="{{ $product['product_image'] }}" alt="{{ $product['name'] }}" />
                        <div class="product-info">
                            <p><strong>Product Name:</strong> {{ $product['name'] }}</p>
                            <p><strong>Quantity:</strong> {{ $product['quantity'] }}</p>
                            <p><strong>Price:</strong> {{ $product['price'] }}</p>
                        </div>
                    </div>
                @endforeach


            </div>

            <!-- Total -->
            <div class="total">
                <p><strong>Total:</strong> {{ $data['total'] }}</p>
            </div>
        </div>

        <!-- Footer -->
        <div class="email-footer">
            <p>Thank you for shopping with us!</p>
            <p>For any inquiries, contact us at support@example.com</p>
        </div>
    </div>
</body>

</html>

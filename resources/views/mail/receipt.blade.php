<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>New Order</title>
    <style>
        /* Reset / base */
        body, html {
            margin: 0;
            padding: 0;
            font-family: "Helvetica Neue", Arial, sans-serif;
            background: #f3f3f3;
            color: #333;
            -webkit-text-size-adjust: 100%;
        }

        a {
            color: #1a73e8;
            text-decoration: none;
        }

        .container {
            max-width: 620px;
            margin: 20px auto;
            background: #fff;
            border: 1px solid #e6e6e6;
            border-radius: 6px;
            overflow: hidden;
        }

        /* Header */
        .header {
            background: #d2401e;
            color: #fff;
            padding: 28px 20px;
            text-align: center;
        }

        .header .logo {
            display: inline-block;
            vertical-align: middle;
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background: #fff;
            margin-right: 12px;
            line-height: 56px;
            text-align: center;
        }

        .header .logo img {
            width: 60px;
            height: auto;
            display: block;
            margin: 6px auto;
        }

        .header h1 {
            display: inline-block;
            margin: 0;
            font-weight: 400;
            font-size: 28px;
            vertical-align: middle;
        }

        /* Body */
        .body {
            padding: 20px;
        }

        .meta {
            margin: 10px 0 18px;
            font-size: 14px;
            color: #666;
        }

        .order-link {
            color: #d2401e;
            font-weight: 600;
        }

        /* Order table */
        .order-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            margin-top: 14px;
            border: 1px solid #e6e6e6;
        }

        .order-table th, .order-table td {
            padding: 14px;
            border-bottom: 1px solid #eee;
            text-align: left;
            vertical-align: top;
        }

        .order-table th {
            background: #fafafa;
            font-weight: 700;
            color: #666;
        }

        .order-table td.qty {
            width: 78px;
            text-align: center;
        }

        .order-table td.price {
            width: 120px;
            text-align: right;
        }

        .order-table tr:last-child td {
            border-bottom: none;
        }

        /* Summary block */
        .summary {
            margin-top: 12px;
            width: 100%;
        }

        .summary .row {
            display: flex;
            border-top: 1px solid #eee;
            padding: 10px 0;
        }

        .summary .row .label {
            flex: 1;
            color: #666;
        }

        .summary .row .value {
            width: 140px;
            text-align: right;
            font-weight: 600;
        }

        .summary .row.total {
            font-size: 18px;
            font-weight: 700;
            border-top: 2px solid #eee;
            padding-top: 14px;
        }

        /* Addresses */
        .address-box {
            border: 1px solid #e6e6e6;
            padding: 14px;
            margin-top: 18px;
            border-radius: 4px;
            background: #fff;
        }

        .address-box p {
            margin: 6px 0;
            color: #555;
            line-height: 1.4;
        }

        .address-title {
            color: #d2401e;
            font-weight: 700;
            margin-bottom: 8px;
            font-size: 18px;
        }

        /* Footer */
        .footer {
            background: #fafafa;
            padding: 12px 20px;
            text-align: center;
            color: #777;
            font-size: 13px;
        }

        /* Responsive */
        @media only screen and (max-width: 480px) {
            .header h1 {
                font-size: 20px;
                display: block;
                margin-top: 8px;
            }

            .header {
                padding: 18px 12px;
            }

            .order-table th, .order-table td {
                padding: 10px;
            }

            .summary .row .value {
                width: 120px;
            }
        }
    </style>
</head>

<body>
<div class="container">
    <!-- Header -->
    <div class="header">
      <span class="logo">
        <img src="{{ asset('assets/img/suya/Mobile-Logo.png') }}" alt="Logo"/>
      </span>
        <h1>New Order: #{{ $data['orderNo'] }}</h1>
    </div>

    <!-- Body -->
    <div class="body">
        <p class="meta">
            You've received the following order from <strong>{{ $data['name'] }}</strong>:
        </p>

        <p>
            <a class="order-link" href="{{ $data['orderLink'] ?? '#' }}">[Order #{{ $data['orderNo'] }}]</a>
            <span style="color:#d2401e;"> ({{ \Carbon\Carbon::parse($data['date'])->format('F j, Y') }})</span>
        </p>

        <!-- Customer Note -->
        @if(!empty($data['note']))
            <p style="font-style:italic; color:#666;">Note: {{ $data['note'] }}</p>
        @endif

        <!-- Order table -->
        <table class="order-table" role="presentation">
            <thead>
            <tr>
                <th style="width:60%;">Product</th>
                <th>Quantity</th>
                <th style="text-align:right;">Price</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($data['products'] as $product)
                <tr>
                <tr>
                    <td>

                        <div style="font-weight:600;">{{ $product['product']['name'] }}</div>
                        @if(!empty($product['selected_option']))
                            <div style="margin-top:6px; color:#777; font-size:13px;">
                                <small><strong>Option:</strong> {{ $product['selected_option'] }}</small>
                            </div>
                        @endif
                    </td>
                    <td class="qty">{{ $product['quantity'] }}</td>
                    <td class="price">{{ $product['price'] }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>

        <!-- Summary -->
        <div class="summary">
            <div class="row">
                <div class="label">Subtotal:</div>
                <div class="value">{{ $data['subtotal'] }}</div>
            </div>
            <div class="row">
                <div class="label">Shipping:</div>
                <div class="value" style="text-align:right;">
                    <div style="font-weight:600;">Pickup</div>
                    <div
                        style="font-size:13px; color:#666;">{{ $data['shipping_note'] }} {{ $data['store_pickup_address'] }}</div>
                </div>
            </div>
            <div class="row">
                <div class="label">Payment method:</div>
                <div class="value">{{ $data['payment_method'] }}</div>
            </div>
            <div class="row total">
                <div class="label">Total:</div>
                <div class="value">{{ $data['total'] }}</div>
            </div>
        </div>

        <!-- Billing address -->
        <div class="address-box" aria-labelledby="billing-title">
            <div id="billing-title" class="address-title">Billing address</div>
            <p style="font-style:italic; color:#999;">{{ $data['name'] }}</p>
            <p>
                <a href="tel:{{ preg_replace('/\s+/', '', $data['phone']) }}" style="color:#d2401e; font-weight:600;">
                    {{ $data['phone'] }}
                </a>
            </p>
            <p>
                <a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a>
            </p>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>Thank you for your order.</p>
        <p>If you have any questions contact <a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a></p>
    </div>
</div>
</body>

</html>

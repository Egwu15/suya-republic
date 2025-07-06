<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Form Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
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
        }

        .email-header h1 {
            margin: 0;
            font-size: 24px;
        }

        .email-body {
            padding: 20px;
        }

        .section {
            margin-bottom: 20px;
        }

        .section h2 {
            font-size: 20px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
        }

        .section p {
            font-size: 14px;
            margin: 5px 0;
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
        <div class="email-header">
            <h1>New Contact Form Submission</h1>
        </div>

        <!-- Body -->
        <div class="email-body">
            <!-- User Details -->
            <div class="section">
                <h2>Contact Details</h2>
                <p><strong>Name:</strong> {{$data['name']}}</p>
                <p><strong>Email:</strong> {{$data['email']}}</p>
                <p><strong>Subject:</strong> {{$data['subject']}}</p>
            </div>

            <!-- Message -->
            <div class="section">
                <h2>Message</h2>
                <p>
                    {{$data['message']}}
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div class="email-footer">
            <p>Thank you for reaching out to us!</p>
            <p>
                We will respond to your inquiry shortly. If urgent, contact us at
                support@example.com
            </p>
        </div>
    </div>
</body>

</html>

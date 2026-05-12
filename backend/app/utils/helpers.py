from datetime import datetime


def generate_transaction_id():

    timestamp = int(
        datetime.now().timestamp()
    )

    return f"TXN-{timestamp}"


def format_currency(
    amount: float
):

    return round(amount, 2)
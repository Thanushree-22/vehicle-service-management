class BillingService:

    TAX_PERCENTAGE = 18


    @staticmethod
    def calculate_subtotal(
        component_price: float,
        labor_cost: float
    ):

        return component_price + labor_cost


    @staticmethod
    def calculate_tax(
        subtotal: float
    ):

        return (
            subtotal *
            BillingService.TAX_PERCENTAGE
        ) / 100


    @staticmethod
    def calculate_total(
        subtotal: float,
        tax: float
    ):

        return subtotal + tax


    @staticmethod
    def generate_bill(
        component_price: float,
        labor_cost: float
    ):

        subtotal = (
            BillingService.calculate_subtotal(
                component_price,
                labor_cost
            )
        )

        tax = (
            BillingService.calculate_tax(
                subtotal
            )
        )

        total_amount = (
            BillingService.calculate_total(
                subtotal,
                tax
            )
        )

        return {
            "subtotal": round(subtotal, 2),
            "tax": round(tax, 2),
            "total_amount": round(total_amount, 2)
        }
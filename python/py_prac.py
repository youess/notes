

def summary_year_credit_fee(balance, anual_rate, minum_month_payment_rate):
	total_paid = 0
	for i in xrange(0,12):
		minum_month_payment = balance * minum_month_payment_rate
		monthly_unpaid = balance - minum_month_payment
		balance = monthly_unpaid * (1 + anual_rate / 12.0)
		total_paid += minum_month_payment
		print "Month: %d" % (i + 1)
		print "Minimum monthly payment: %.2f" % minum_month_payment
		print "Remaining balance: %.2f" % balance
	print "Total paid: %.2f" % total_paid
	print "Remaining balance: %.2f" % balance


def fixed_month_fee(balance, anual_rate):

	def gt_balance(fix_fee):
		pre_b = balance
		for x in range(0,12):
			pre_b = (pre_b - fix_fee) * (1 + anual_rate / 12.0)
		return pre_b

	for x in range(10, balance, 10):
		a = gt_balance(x)
		# print(a)
		if a <= 0:
			# print "Lowest Payment: %d" % x
			# break
			return x

fixed_month_fee(balance, annualInterestRate)

def bisect_search_fix(balance, rate):
	upper = balance * (1 + rate)**12 / 12.0
	lower = balance / 12.0
	def year_unpaid(fix_fee):
		pre_b = balance
		for x in range(12):
			pre_b = (pre_b - fix_fee) * (1 + rate)
		return pre_b
	fix_fee = (lower + upper) / 2
	left_fee = year_unpaid(fix_fee)
	while abs(left_fee) >= 1e-4 :
		if left_fee > 0:
			lower = fix_fee
		if left_fee < 0:
			upper = fix_fee
		fix_fee = (lower + upper) / 2
		left_fee = year_unpaid(fix_fee)
	return fix_fee

balance = 320000
annualInterestRate = .2
print "Lowest Payment: %.2f" % bisect_search_fix(balance, annualInterestRate / 12.0)
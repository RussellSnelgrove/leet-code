# @param {Integer[]} hours
# @param {Integer} target
# @return {Integer}
def number_of_employees_who_met_target(hours, target)
    count = 0
    hours.each do | employee_hour |
        count += 1 if employee_hour >= target
    end
    return count
end
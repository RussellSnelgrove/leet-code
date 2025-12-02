# @param {Integer[]} time_series
# @param {Integer} duration
# @return {Integer}
def find_poisoned_duration(time_series, duration)
    cooldown = 0
    last_hit = time_series[0]
    total_damage = duration
    time_series.each do | hit_time |
        if hit_time - last_hit >= duration
            total_damage += duration 
        else
            total_damage += hit_time - last_hit
        end 
        last_hit = hit_time
    end

    return total_damage
end
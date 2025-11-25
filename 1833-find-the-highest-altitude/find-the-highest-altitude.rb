# @param {Integer[]} gain
# @return {Integer}
def largest_altitude(gain)
    max_alt = 0;
    current_altitude = 0;
    gain.each do |altitude_change|
        current_altitude += altitude_change
        max_alt = current_altitude if (max_alt < current_altitude)
    end
    return max_alt
end
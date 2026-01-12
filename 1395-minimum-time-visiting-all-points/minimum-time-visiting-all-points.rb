# @param {Integer[][]} points
# @return {Integer}
def min_time_to_visit_all_points(points)
    total_seconds = 0
    return total_seconds if points.length == 1
    last_set = points.shift
    # puts points
    points.each do |point|
        total_seconds += [(point[0]-last_set[0]).abs, (point[1]-last_set[1]).abs].max
        last_set = point
    end
    total_seconds
end
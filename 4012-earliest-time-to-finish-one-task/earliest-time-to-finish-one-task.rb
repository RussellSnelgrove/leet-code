# @param {Integer[][]} tasks
# @return {Integer}
def earliest_time(tasks)
    earliest_task_completion = nil

    tasks.each do |task|
        task_time = task.sum
        earliest_task_completion = task_time  if earliest_task_completion.nil?
        if task_time < earliest_task_completion
            earliest_task_completion = task_time
        end
    end
    return earliest_task_completion
end
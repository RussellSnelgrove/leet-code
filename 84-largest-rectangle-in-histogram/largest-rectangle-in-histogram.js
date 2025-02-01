var largestRectangleArea = function (heights) {
	let maxArea = 0;
	let indexHieghtArray = [];
	for (let i = 0; i < heights.length; i++) {
		const height = heights[i];
		let index = i;
		while (indexHieghtArray.length > 0 && indexHieghtArray.at(-1).height > height){
			const element = indexHieghtArray.pop();
			index = element.index;
			maxArea = Math.max((i-element.index) * element.height, maxArea);
		}
		indexHieghtArray.push({ index, height })
	}
	while (indexHieghtArray.length > 0){
		const element = indexHieghtArray.pop();
		maxArea = Math.max((heights.length-element.index) * element.height, maxArea);
	}
	return maxArea;
};

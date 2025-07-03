var twoSum = function(nums, target) {
    let n=nums.length;
    let NeedNumberIndex={};
    for(let i=0;i<n;i++){
        let NeedNumber=target-nums[i];
        if(NeedNumberIndex[NeedNumber]!=undefined){
            return[i,NeedNumberIndex[NeedNumber]];
        }
        
    NeedNumberIndex[nums[i]]=i;
    }
};
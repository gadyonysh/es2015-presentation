function useDefaultArg(arg = 'arg') {
  // equal to: arg = (typeof arg === 'undefined') ? 'arg' : arg;
  // or less strict: arg = arg || 'arg';
}

// we can use expressions as default args:
function getThree() { return 3; }
function useExpressionsAsDefaultArg(num = 5 + getThree()) { return num; }

// any arg can have default value
function useDefaultParamForAnyArg(first, second = 2, third) {}

// we can use prev. args in default values (TDZ)
function usePrevArgAsDefaultValue(first, second = first, third = getSmth(second), fourth = fifth/*error*/, fifth) {}
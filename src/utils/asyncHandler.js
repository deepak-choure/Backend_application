//try catch way not promise.resolve way
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    //send response from here
    // res
    //   .status(error.code || 500)
    //   .json({ success: false, message: error.message });
  }
};
export default asyncHandler;

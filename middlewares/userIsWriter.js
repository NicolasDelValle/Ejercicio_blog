function userisWriter(req, res, next) {
  if (req.user !== undefined) {
    const { roleId } = req.user;
    if (roleId === 2) {
      return next();
    }
  } else {
    res.redirect("/error");
  }
}

module.exports = userisWriter;

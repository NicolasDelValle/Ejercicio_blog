function userisAdmin(req, res, next) {
  if (req.user !== undefined) {
    const { roleId } = req.user;
    if (roleId === 4) {
      return next();
    }
  } else {
    res.redirect("/error");
  }
}

module.exports = userisAdmin;

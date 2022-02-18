function userisEditor() {
  if (req.user !== undefined) {
    const { roleId } = req.user;
    if (roleId === 3) {
      return next();
    }
  } else {
    res.redirect("/error");
  }
}

module.exports = userisEditor;

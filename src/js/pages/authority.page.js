class Authority {
  get environmentAgency() { return $("input[value='ea']"); }
  get continue() { return $("button[type='submit']"); }
}

module.exports = new Authority();
class ShipmentType {
  get recovery() { return $("input[value='recovery']"); }
  get continue() { return $("button[type='submit']"); }
}

module.exports = new ShipmentType();
class NotificationId {
  get notificationNumber() { return $(".govuk-inset-text"); }
  get continue() { return $("button[type='submit']"); }
}

module.exports = new NotificationId();
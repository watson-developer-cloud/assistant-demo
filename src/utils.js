const trackEvent = (action, objectType, object) => {
  if (window.bluemixAnalytics) {
    window.bluemixAnalytics.trackEvent('Custom Event', {
      productTitle: window.digitalData.page.pageInfo.productTitle,
      action,
      objectType,
      object,
    });
  }
};

export default trackEvent;

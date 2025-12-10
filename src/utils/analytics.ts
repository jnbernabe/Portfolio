import ReactGA from "react-ga4";

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
}

export const trackEvent = ({ category, action, label }: AnalyticsEvent) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

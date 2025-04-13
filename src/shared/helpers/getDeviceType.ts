export const getDeviceType = () => {
  try {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isMobile || isTouchDevice) {
      return "mobile";
    } else {
      return "desktop";
    }
  } catch (error) {
    console.error("Ошибка при определении типа устройства:", error);
    return "unknown";
  }
};

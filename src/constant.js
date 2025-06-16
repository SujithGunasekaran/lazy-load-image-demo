export const lazyLoadInitialData = {
  effect: 'blur',
  threshold: 0,
  useIntersectionObserver: false,
  visibleByDefault: false,
  delayMethod: 'debounce',
  delayTime: 50,
  direction: 'vertical-window',
}

export const selectFields = [
  {
    label: 'Effect',
    name: 'effect',
    description: 'effect to use when an image is loaded',
    options: [
      {
        label: 'Blur',
        value: 'blur',
      },
      {
        label: 'Black And white',
        value: 'black-and-white',
      }
    ]
  },
  {
    label: 'Use Intersection Observer',
    name: 'useIntersectionObserver',
    description: 'This will use the Intersection Observer API to lazy load images',
    options: [
      {
        label: 'Enabled',
        value: true,
      },
      {
        label: 'Disabled',
        value: false,
      }
    ]
  },
  {
    label: 'Visible By Default',
    name: 'visibleByDefault',
    description: 'This will make the image visible by default',
    options: [
      {
        label: 'Enabled',
        value: true,
      },
      {
        label: 'Disabled',
        value: false,
      }
    ]
  },
  {
    label: 'Delay Method',
    name: 'delayMethod',
    description: 'This will use the delay method to lazy load images',
    options: [
      {
        label: 'Debounce',
        value: 'debounce',
      },
      {
        label: 'Throttle',
        value: 'throttle',
      }
    ]
  },
];

export const textFields = [
  {
    label: 'Delay Time',
    name: 'delayTime',
    description: 'This will use the delay time to lazy load images',
  },
  {
    label: 'Threshold',
    name: 'threshold',
    description: 'This will use the threshold for intersectionObserver to lazy load images',
  }
];


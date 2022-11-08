// components/Adsense.tsx

function Ads() {
  const adsRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    const executeWindowAds = () => {
      try {
        // @ts-ignore
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error: any) {
        console.error('error ads======>', error.message);
      }
    };

    const insHasChildren = adsRef.current?.childNodes.length;
    if (!insHasChildren) {
      executeWindowAds();
    }
  }, []);

  return (
      <ins
        ref={adsRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-xxx"
        data-ad-slot="xxx"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
  );
}

export default function Adsense() {
  const router = useRouter();
  const [shouldMount, setShouldMount] = useState(true);

  useEffect(() => {
    const onRouteChangeStart = () => setShouldMount(false);
    const onRouteChangeComplete = () => setShouldMount(true);

    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);

  return shouldMount ? <Ads /> : null;
}

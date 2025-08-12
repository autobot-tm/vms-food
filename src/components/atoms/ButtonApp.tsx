import { Button } from '@/components/ui/button';
type Props = React.ComponentProps<typeof Button> & { loading?: boolean };
export default function ButtonApp({ loading, children, ...p }: Props) {
    return (
        <Button disabled={loading || p.disabled} {...p}>
            {loading ? 'Đang xử lý...' : children}
        </Button>
    );
}

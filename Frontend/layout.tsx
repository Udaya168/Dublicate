import { Outlet } from 'react-router-dom';
import { MusicProvider } from '../context/music-context';

export function QuickEditLayout() {
    return (
        <MusicProvider>
            <Outlet />
        </MusicProvider>
    );
}

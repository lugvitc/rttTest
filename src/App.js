import { useEffect, useRef, useState } from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/home';
import Events from './pages/events/events';

import TopBar from './components/topBar/topBar';
import Dock from './components/dock/dock';
import LearnLinux from './pages/learnLinux/learnLinux';

import './styles/terminalText.css';
import useSettings from './hooks/useSettings';
import SettingsDialog from './components/settingsDialog/settingsDialog';
// import UserForm from './pages/recruitment_2022/recruitment';

export default function App() {
    const pages = [
        {
            title: 'Home',
            link: '/',
            component: <Home />
        },
        {
            title: 'Events',
            link: '/events',
            component: <Events />
        },
        {
            title: 'Learn Linux',
            link: '/learn-linux',
            component: <LearnLinux />
        }
        //, {
        //     title: 'Recruitment 2022',
        //     link: '/recruitment',
        //     component: <UserForm />
        // }
    ];

    const [mainTopMargin, setMainTopMargin] = useState('0');

    const topBarRef = useRef(null);
    const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);

    useEffect(() => {
        const setCorrectMargin = () =>
            setMainTopMargin(`${topBarRef.current.clientHeight}px`);

        setCorrectMargin();
        window.addEventListener('resize', setCorrectMargin);

        return () => window.removeEventListener('resize', setCorrectMargin);
    }, []);

    const settingsDialogRef = useRef(null);

    const openSettingsDialog = () => {
        setSettingsDialogOpen(true);
        if (settingsDialogRef.current) settingsDialogRef.current.showModal();
    };

    const closeSettings = () => {
        setSettingsDialogOpen(false);
        if (settingsDialogRef.current) settingsDialogRef.current.close();
    };

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <TopBar
                                refer={topBarRef}
                                topBarLinks={pages}
                                openSettingsDialog={openSettingsDialog}
                                settingsDialogOpen={settingsDialogOpen}
                            />
                            <SettingsDialog
                                refer={settingsDialogRef}
                                closeSettings={closeSettings}
                            />
                            <main
                                style={{
                                    marginTop: mainTopMargin,
                                    minHeight: `calc(100vh - ${mainTopMargin})`
                                }}
                                id='content'
                            >
                                <Dock />
                                <div className='terminals'>
                                    <Outlet />
                                </div>
                            </main>
                        </>
                    }
                >
                    {pages.map((page, index) =>
                        page.link === '/' ? (
                            <Route key={index} index element={page.component} />
                        ) : (
                            <Route
                                key={index}
                                path={page.link}
                                element={page.component}
                            />
                        )
                    )}
                </Route>
            </Routes>
        </HashRouter>
    );
}


import {
    CameraIcon,
    CameraIconActive,
    HomeIcon,
    HomeIconActive,
    UserGroupIcon,
    UserGroupIconActive,
} from '~/components/Icons'
import Menu, { MenuItem } from './Menu'

import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import config from '~/config'
const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupIconActive />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<CameraIcon />}
                    iconActive={<CameraIconActive />}
                />
            </Menu>
        </aside>
    )
}

export default Sidebar

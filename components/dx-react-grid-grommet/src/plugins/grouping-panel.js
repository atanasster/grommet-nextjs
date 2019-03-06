import { withComponents } from '@devexpress/dx-react-core';
import { GroupingPanel as GroupingPanelBase } from '@devexpress/dx-react-grid';
import { GroupPanelContainer as Container } from '../templates/grouping-panel/group-panel-container';
import { GroupPanelItem as Item } from '../templates/grouping-panel/group-panel-item';
import { GroupPanelEmptyMessage as EmptyMessage } from '../templates/grouping-panel/group-panel-empty-message';

export const GroupingPanel = withComponents({ Container, Item, EmptyMessage })(GroupingPanelBase);

import React from 'react';
import { Height } from '@extensions/AttributePanel/components/attributes/Height';
import { ContainerBackgroundColor } from '@extensions/AttributePanel/components/attributes/ContainerBackgroundColor';
import { Padding } from '@extensions/AttributePanel/components/attributes/Padding';
import { AttributesPanelWrapper } from '@extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { Collapse, Grid, Space } from '@arco-design/web-react';
import { Stack } from 'easy-email-editor';
import { ClassName } from '../../attributes/ClassName';

export function Spacer() {
  return (
    <AttributesPanelWrapper>
      <Collapse defaultActiveKey={['-1', '0', '1', '2', '3']}>
        <Collapse.Item name='1' header='Dimension'>
          <Space direction='vertical'>
            <Height />
            <Padding />
          </Space>
        </Collapse.Item>

        <Collapse.Item name='2' header='Background'>
          <ContainerBackgroundColor title='Background color' />
        </Collapse.Item>

        <Collapse.Item name='4' header='Extra'>
          <Grid.Col span={24}>
            <ClassName />
          </Grid.Col>
        </Collapse.Item>
      </Collapse>
    </AttributesPanelWrapper>
  );
}

import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {WindowWidthQuery} from '..';
import {View} from '../../View';
import ShowDocs from '../../../.storybook/ShowDocs';

storiesOf('UI/WindowWidthQuery', module)
  .add('Documentation', () => h(ShowDocs, {md: require('../../../docs/en/WindowWidthQuery.md')}))
  .add('Example', () =>
    <WindowWidthQuery>
      <View maxWidth={300}>
        Up to 300px
      </View>
      <View>
        More than 300px
      </View>
    </WindowWidthQuery>
  )
  .add('100px increments', () =>
    <WindowWidthQuery>
      <View maxWidth={100}>
        Up to 100px
      </View>
      <View maxWidth={200}>
        100px - 200px
      </View>
      <View maxWidth={300}>
        200px - 300px
      </View>
      <View maxWidth={400}>
        300px - 400px
      </View>
      <View maxWidth={500}>
        400px - 500px
      </View>
      <View maxWidth={600}>
        500px - 600px
      </View>
      <View maxWidth={700}>
        600px - 700px
      </View>
      <View>
        700px+
      </View>
    </WindowWidthQuery>
  )

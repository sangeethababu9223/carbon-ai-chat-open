/**
 *
 * IBM Confidential
 *
 * (C) Copyright IBM Corp. 2024
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U. S. Copyright Office
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 */

import { ChatInstance, GenericItem } from '@carbon/ai-chat';

import { RESPONSE_MAP } from './responseMap';

function doOption(instance: ChatInstance) {
  const options = Object.keys(RESPONSE_MAP).map(key => ({ label: key, value: { input: { text: key } } }));
  instance.messaging.addMessage({
    output: {
      generic: [
        {
          response_type: 'option',
          title: 'Select a response to view it in action (button).',
          options,
          preference: 'button',
        } as GenericItem,
        /* {
          response_type: 'option',
          title: 'Select a response to view it in action (dropdown).',
          options,
        } as GenericItem, */
      ],
    },
  });
}

export { doOption };

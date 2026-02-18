export const submitWeb3Form = async ({
    accessKey,
    subject,
    fromName,
    replyTo,
    fields = {},
}) => {
    if (!accessKey) {
        throw new Error('Missing Web3Forms access key.');
    }

    const payload = {
        access_key: accessKey,
        subject,
        from_name: fromName,
        replyto: replyTo,
        botcheck: '',
        ...fields,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });

        let result = null;
        try {
            result = await response.json();
        } catch {
            result = null;
        }

        if (!response.ok || !result?.success) {
            throw new Error(result?.message || 'Failed to submit form. Please try again.');
        }

        return result;
    } catch (error) {
        if (error?.name === 'AbortError') {
            throw new Error('Request timed out. Please check your internet and try again.');
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
};

export const getWeb3FormErrorMessage = (error) => {
    const message = String(error?.message || '').trim();

    if (!message) {
        return 'Unable to send right now. Please try again in a moment.';
    }

    if (message.toLowerCase().includes('missing web3forms access key')) {
        return 'Form is not configured yet. Add Web3Forms keys in app/.env and restart the server.';
    }

    if (message.toLowerCase().includes('request timed out')) {
        return 'Request timed out. Please check internet and try again.';
    }

    return message;
};

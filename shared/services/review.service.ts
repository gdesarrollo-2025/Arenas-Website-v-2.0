const token = process.env.HUBSPOT_API_TOKEN;
export async function getReviews() {

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            filterGroups: [{
                filters: [
                    {
                        propertyName: 'hs_content',
                        operator: 'HAS_PROPERTY'
                    },
                    {
                        operator: 'BETWEEN',
                        propertyName: 'hs_value',
                        highValue: '10',
                        value: '8'
                    },
                    {
                        operator: 'GT',
                        propertyName: 'hs_createdate',
                        value: '2026-01-01'
                    }
                ]
            }],
            limit: 50,
            properties: ['hs_content', 'hs_value', 'hs_contact_firstname', 'hs_contact_lastname'],
        })
    };

    const res = await fetch("https://api.hubapi.com/crm/objects/2026-03/feedback_submissions/search", options);

    const data = await res.json();
    return data.results.map((r:any) => ({
        id: r.id,
        content: r.properties.hs_content,
        name: r.properties.hs_contact_firstname 
    }))
}
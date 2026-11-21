// Schema.org JSON-LD. Only facts that are also visible on the site belong here.
import { phone } from '$lib/site';

export const SITE = 'https://pollywolly.io';
const telephone = phone.replace(/\s/g, '');

export const siteSchema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'ProfessionalService',
			'@id': `${SITE}/#organization`,
			name: 'PollyWolly',
			legalName: 'PollyWolly BV',
			url: `${SITE}/`,
			logo: `${SITE}/apple-touch-icon.png`,
			image: `${SITE}/og.jpg`,
			description:
				"Software op maat voor Vlaamse KMO's. Eerste versie op dag 30, prijs vooraf, code van u.",
			slogan: 'Voor ondernemers die hun tijd terug willen.',
			telephone,
			vatID: 'BE0797231914',
			address: { '@type': 'PostalAddress', addressLocality: 'Mol', addressCountry: 'BE' },
			areaServed: { '@type': 'AdministrativeArea', name: 'Vlaanderen' },
			knowsLanguage: 'nl-BE',
			founder: { '@id': `${SITE}/#thomas-dorissen` },
			contactPoint: {
				'@type': 'ContactPoint',
				contactType: 'customer service',
				telephone,
				availableLanguage: 'nl',
				url: `${SITE}/contact`
			}
		},
		{
			'@type': 'Person',
			'@id': `${SITE}/#thomas-dorissen`,
			name: 'Thomas Dorissen',
			worksFor: { '@id': `${SITE}/#organization` },
			url: `${SITE}/`
		},
		{
			'@type': 'WebSite',
			'@id': `${SITE}/#website`,
			url: `${SITE}/`,
			name: 'PollyWolly',
			inLanguage: 'nl-BE',
			publisher: { '@id': `${SITE}/#organization` }
		}
	]
};

/** Serialise as a JSON-LD script tag, escaping `<` so the JSON can never close the tag. */
export function jsonLd(data: object): string {
	return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

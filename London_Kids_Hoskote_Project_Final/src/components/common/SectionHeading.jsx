import PropTypes from 'prop-types';

const SectionHeading = ({ subtitle, title, description, align = 'center', className = '' }) => {
    return (
        <div className={className} style={{ textAlign: align, marginBottom: '64px' }}>
            {subtitle && (
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                    {subtitle}
                </span>
            )}
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, color: 'var(--color-neutral-900)', margin: '0' }}>
                {title}
            </h2>
            {description && (
                <p style={{ color: 'var(--color-neutral-700)', maxWidth: '600px', margin: '16px auto 0', lineHeight: 1.6 }}>
                    {description}
                </p>
            )}
        </div>
    );
};

SectionHeading.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    className: PropTypes.string
};

export default SectionHeading;

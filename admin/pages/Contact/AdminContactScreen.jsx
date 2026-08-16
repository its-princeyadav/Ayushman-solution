import Link from "next/link";
import styles from "../../styles/adminTable.module.css";

function formatDateTime(dateString) {
  return new Date(dateString).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const STATUS_LABEL = { new: "New", contacted: "Contacted", closed: "Closed" };

export default function AdminContactScreen({ data, error }) {
  if (error || !data) {
    return (
      <div className={styles.wrap}>
        <div className={styles.errorBanner}>Unable to load contact messages. Please try again.</div>
      </div>
    );
  }

  const { contacts, pagination } = data;

  return (
    <div className={styles.wrap}>
      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>Contact Submissions</h2>
          <span className={styles.panelCount}>{pagination.total} total</span>
        </div>

        {contacts.length === 0 ? (
          <p className={styles.emptyState}>No contact messages found</p>
        ) : (
          <div className={styles.cardList}>
            {contacts.map((contact) => (
              <article key={contact.id} className={styles.card}>
                <div className={styles.cardHead}>
                  <div>
                    <div className={styles.userName}>{contact.name}</div>
                    <p className={styles.cardMeta}>
                      {contact.email}
                      {contact.phone ? ` · ${contact.phone}` : ""}
                      {contact.company ? ` · ${contact.company}` : ""}
                    </p>
                  </div>
                  <span
                    className={`${styles.status} ${
                      contact.status === "new" ? styles.statusPending : styles.statusActive
                    }`}
                  >
                    {STATUS_LABEL[contact.status] || contact.status}
                  </span>
                </div>

                <div className={styles.cardSubject}>{contact.subject}</div>
                <p className={styles.cardMessage}>{contact.message}</p>

                <div className={styles.cardFootRow}>
                  <span>Service: {contact.service}</span>
                  <span>Received: {formatDateTime(contact.createdAt)}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {pagination.totalPages > 1 && (
          <div className={styles.pagination}>
            <span className={styles.pageInfo}>
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <Link
              href={`/admin/contact?page=${pagination.page - 1}`}
              className={`${styles.pageLink} ${pagination.page <= 1 ? styles.pageLinkDisabled : ""}`}
              aria-disabled={pagination.page <= 1}
            >
              Previous
            </Link>
            <Link
              href={`/admin/contact?page=${pagination.page + 1}`}
              className={`${styles.pageLink} ${pagination.page >= pagination.totalPages ? styles.pageLinkDisabled : ""}`}
              aria-disabled={pagination.page >= pagination.totalPages}
            >
              Next
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
